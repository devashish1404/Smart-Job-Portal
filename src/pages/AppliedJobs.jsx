// import React from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Box } from '@mui/material';
// // import { makeStyles } from '@mui/styles';
// import { styled, alpha } from '@mui/material/styles';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';
// import Pagination from '@mui/material/Pagination';
// import InputAdornment from '@mui/material/InputAdornment';
// import TextField from '@mui/material/TextField';

// import Stack from '@mui/material/Stack';
// // import Searchbar1 from './Searchbar1';

// // const useStyles = makeStyles((theme) => ({
// //     table: {
// //         minWidth: 400,
// //     },
// //     // avatar: {
// //     //   width: theme.spacing(7),
// //     //   height: theme.spacing(7),
// //     // },
// // }));

// const data = [
//     {
//         id: 1,
//         userid: 169,
//         name: 'Rohit',
//         appliedon: "xxx LTD",
//         contact: 6203990413,
//         date: "2023-06-01"

//     },

//     {
//         id: 2,
//         userid: 170,
//         name: 'John',
//         appliedon: "xxx LTD",
//         contact: 6203457852,
//         date: "2022-04-22"
//     },
//     {
//         id: 3,
//         userid: 171,
//         name: 'Dant',
//         appliedon: "xxx LTD",
//         contact: 7598421585,
//         date: "2023-04-11"
//     },

//     {
//         id: 4,
//         userid: 172,
//         name: 'Mohit',
//         appliedon: "xxx LTD",
//         contact: 7598421585,
//         date: "2023-03-27"
//     },
//     {
//         id: 5,
//         userid: 173,
//         name: 'Daniel',
//         appliedon: "xxx LTD",
//         contact: 7598421585,
//         date: "2021-08-22"
//     },
//     {
//         id: 6,
//         userid: 174,
//         name: 'Aarohi',
//         appliedon: "xxx LTD",
//         contact: 7598421585,
//         date: "2022-06-07"
//     },
//     {
//         id: 7,
//         userid: 175,
//         name: 'Rohit',
//         appliedon: "xxx LTD",
//         contact: 7598421585,
//         date: "2023-06-24"
//     },
//     {
//         id: 8,
//         userid: 176,
//         name: 'Davil',
//         appliedon: "xxx LTD",
//         contact: 7598421585,
//         date: "2022-04-23"
//     },


//     // Add more data rows here
// ];



// const Appliedjob = () => {
//     const classes = useStyles();

//     return (
//         <Box sx={{ marginInline: '5%', textAlign: 'center' }}>

//             {/* <Searchbar1/> */}

//             <Box sx={{ marginInline: '7%', marginTop: '2%', backgroundColor: '#607ebd', color: 'white' }}>
//                 <TextField
//                     fullWidth
//                     variant="outlined"
//                     placeholder="Search..."

//                     InputProps={{
//                         startAdornment: (
//                             <InputAdornment position="start">
//                                 <SearchIcon />
//                             </InputAdornment>
//                         ),
//                     }}
//                 />
//             </Box>
//             <Box sx={{ marginTop: '5%' }}>
//                 <TableContainer component={Paper}   >
//                     <Table className={classes.table} aria-label="simple table">
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell sx={{ fontSize: '20px' }}>User ID</TableCell>
//                                 <TableCell align="left" sx={{ fontSize: '20px' }}>Name</TableCell>
//                                 <TableCell align="left" sx={{ fontSize: '20px' }}>Applied On</TableCell>
//                                 <TableCell align="left" sx={{ fontSize: '20px' }}>Contact</TableCell>
//                                 <TableCell align="left" sx={{ fontSize: '20px' }}>Date</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {data.map(row => (
//                                 <TableRow key={row.id}>
//                                     <TableCell align="left">{row.userid}</TableCell>
//                                     <TableCell align="left">{row.name}</TableCell>
//                                     <TableCell align="left">{row.appliedon}</TableCell>
//                                     <TableCell align="left">{row.contact}</TableCell>
//                                     <TableCell align="left">{row.date}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Box>
//             <Box sx={{ marginTop: '2%', marginInline: { xs: '2%', sm: '20%', md: '30%' } }}>
//                 <Stack spacing={3} sx={{ justifyContent: 'center' }}>
//                     <Pagination count={10} shape="rounded" color="primary" />
//                     {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}

//                 </Stack>

//             </Box>
//         </Box>
//     );
// };

// export default Appliedjob;