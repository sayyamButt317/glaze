import { Button } from "@/components/ui/button";
// import { PageHeader } from "../_component/PageHeader";
import Link from "next/link";
import db from "../../../db/db";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { CheckCircle2, MoreVertical, XCircle } from "lucide-react";
import { formatCurrency, formatNumber } from "../../lib/formatters";

import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  ActiveToggleDropdownItem,
  DeleteDropdownItem,
} from "./../_components/InjectionAction";

export default function AddInjectionsDetails() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        {/* <PageHeader>Products</PageHeader> */}
        <Button asChild>
          <Link href="/admin/products/Injections/new">Add Product</Link>
        </Button>
      </div>
      <ProductTable />
    </>
  );
}

async function ProductTable() {
  const products = await db.injection.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      isAvailableForPurchase: true,
      imagePath: true,
      createdAt: true,
      _count: { select: { Order: true } },
    },
    orderBy: { name: "asc" },
  });
  if (products.length === 0) return <p>No Products Found</p>;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available For Purchase</span>
          </TableHead>
          <div>Status</div>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Published At</TableHead>
          <TableHead>Orders</TableHead>
          <TableCell>Actions</TableCell>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((products) => (
          <TableRow key={products.id}>
            <TableCell>
              {products.isAvailableForPurchase ? (
                <>
                  <span className="sr-only">Available</span>
                  <CheckCircle2 />
                </>
              ) : (
                <>
                  <span className="sr-only">Unavailable</span>
                  <XCircle className="stroke-destructive" />
                </>
              )}
            </TableCell>
            <TableCell>
              <img
                src={products.imagePath}
                height="50"
                width="50"
                className="object-cover rounded-md"
              />
            </TableCell>
            <TableCell>{products.name}</TableCell>
            <TableCell>{formatCurrency(products.priceInCents / 100)}</TableCell>

            <TableCell>
              {new Date(products.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>{formatNumber(products._count.Order)}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MoreVertical />
                  <span className="sr-only">Actions</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      href={`/admin/products/Injections/${products.id}/edit`}
                    >
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <ActiveToggleDropdownItem
                    id={products.id}
                    isAvailableForPurchase={products.isAvailableForPurchase}
                  />
                  <DropdownMenuSeparator />
                  <DeleteDropdownItem
                    id={products.id}
                    disabled={products._count.Order > 0}
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
