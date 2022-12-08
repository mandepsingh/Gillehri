import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: '50px',
    marginBottom: '1rem',
    display: 'flex',
    // padding: '16px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    height: '5rem',
    padding: '24px',
    background: '#bbff7f3b',
    
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '10px',
    background: '#bbff7f3b',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      // flexDirection: 'column-reverse',
    },
  },
  searchBox: {
    // height: '54px',
    width: '60%',
    margin: '10px',
  },
  
}));