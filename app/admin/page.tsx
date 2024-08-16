import StatCard from "@/components/StatCard";
import { DataTable } from "@/components/tables/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";
import { columns } from "../../components/tables/columns";

const Admin = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14 ">
      <header className="admin-header flex items-center justify-between p-4">
        <Link href="/" className="flex items-center cursor-pointer">
          <div className="flex flex-row gap-2">
            <Image
              src="/assets/images/logo-try1.jpeg"
              height={1000}
              width={1000}
              alt="patient"
              className="h-10 w-auto rounded-full"
            />
            <h1 className="text-2xl font-bold">EthioCare</h1>
          </div>
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Wellcome 🖐🏿</h1>
          <p className="text-dark-700">
            Ready to get started with today&apos;s appointments?
          </p>
        </section>
        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>
        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default Admin;
