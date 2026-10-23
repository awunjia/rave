-- AlterEnum
ALTER TYPE "MfaType" ADD VALUE 'EMAIL';

-- AlterTable
ALTER TABLE "AuthToken" ADD COLUMN     "attemptCount" INTEGER NOT NULL DEFAULT 0;
