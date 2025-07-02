'use client';
import Navbar from '@/components/Navbar';
import TopFilters from '@/components/TopFilters';
import CRMDashboardTable from '@/components/CRMDashboardTable';
import { crmEntries } from '@/lib/data2';
import styles from './crm-dashboard.module.css';

export default function CRMDashboardPage() {
  return (
    <div className={styles.crmDashboard}>
      <Navbar />
      <TopFilters />
      <CRMDashboardTable data={crmEntries} />
    </div>
  );
}
