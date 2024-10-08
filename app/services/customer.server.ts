import { prisma } from "#app/utils/db.server";
import { Customer } from "@prisma/client";

export const getCustomers = async () => {
  return await prisma.customer.findMany();
};

export const getCustomer = async (customerId: number) => {
  return await prisma.customer.findUnique({
    where: { customerId },
  });
};

export const createCustomer = async (
  customer: Pick<Customer, "name" | "email" | "type">,
) => {
  return await prisma.customer.create({ data: customer });
};

export const updateCustomer = async (
  customer: Pick<Customer, "customerId" | "name" | "email" | "type">,
) => {
  return await prisma.customer.update({
    where: { customerId: customer.customerId },
    data: customer,
  });
};

export const deleteCustomer = async (customerId: number) => {
  return await prisma.customer.delete({ where: { customerId } });
};
