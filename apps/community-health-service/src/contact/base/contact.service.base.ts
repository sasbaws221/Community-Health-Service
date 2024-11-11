
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Contact as PrismaContact } from "@prisma/client";

export class ContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ContactCountArgs, "select">): Promise<number> {
    return this.prisma.contact.count(args);
  }

  async contacts(args: Prisma.ContactFindManyArgs): Promise<PrismaContact[]> {
    return this.prisma.contact.findMany(args);
  }
  async contact(
    args: Prisma.ContactFindUniqueArgs
  ): Promise<PrismaContact | null> {
    return this.prisma.contact.findUnique(args);
  }
  async createContact(args: Prisma.ContactCreateArgs): Promise<PrismaContact> {
    return this.prisma.contact.create(args);
  }
  async updateContact(args: Prisma.ContactUpdateArgs): Promise<PrismaContact> {
    return this.prisma.contact.update(args);
  }
  async deleteContact(args: Prisma.ContactDeleteArgs): Promise<PrismaContact> {
    return this.prisma.contact.delete(args);
  }
}
