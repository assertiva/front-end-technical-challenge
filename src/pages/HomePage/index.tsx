import styles from './styles.module.scss';

import { BillingFilter } from '../../components/BillingFilter';
import { StoreTable } from '../../components/StoreTable';
import { Maps } from '../../components/Maps';

export function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.layoutContainer}>
        <div className={styles.storesContainer}>
          <StoreTable />
        </div>

        <div className={styles.billingContainer}>
          <BillingFilter />
          <Maps />
        </div>
      </div>
    </div>
  );
}
