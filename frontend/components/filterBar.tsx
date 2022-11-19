import FilterByArea from './filterByArea';
import FilterByCategory from './filterByCategory';
import FilterByIngredient from './filterByIngredient';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const FilterBar: React.FC<Props> = ({ setSearch, search }) => {
  return (
    <Grid container spacing={0} sx={{ mb: 4 }}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h5" sx={{ mt: 4, mb: 4 }}>
          Choose your preferences and we select the best recipe for you:
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FilterByCategory setSearch={setSearch} search={search} />
          </Grid>
          <Grid item xs={4}>
            <FilterByArea setSearch={setSearch} search={search} />
          </Grid>
          <Grid item xs={4}>
            <FilterByIngredient setSearch={setSearch} search={search} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default FilterBar;
