import TextField from '@mui/material/TextField';
import styles from './styles.module.scss';
import { SearchProps } from '../../interfaces/props';
import { useStores } from '../hooks/useStores';

export function Search() {
  const { setSearch } = useStores()

  return (
    <div className={styles.container}>
      <TextField
        fullWidth
        label="Pesquisar"
        variant="outlined"
        size="medium"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}