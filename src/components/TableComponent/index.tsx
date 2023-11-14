import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";
import Pagination from "@mui/material/Pagination";

function createData(
  Id: number,
  date: string,
  link: string,
  source: string,
  action: string
) {
  return { Id, date, link, source, action };
}

const rows = [
  createData(148525, "23 Sep 2023", "https://google.com", "Google", "Removed"),
  createData(458722, "23 Sep 2023", "https://google.com", "Reddit", "Removed"),
  createData(158476, "23 Sep 2023", "https://google.com", "Twitter", "Removed"),
  createData(687549, "23 Sep 2023", "https://google.com", "Reddit", "Removed"),
  createData(
    845248,
    "23 Sep 2023",
    "https://google.com",
    "Twitter",
    "Delisted"
  ),
  createData(258765, "23 Sep 2023", "https://google.com", "Google", "Removed"),
  createData(875492, "23 Sep 2023", "https://google.com", "Google", "Removed"),
  createData(
    587469,
    "23 Sep 2023",
    "https://google.com",
    "Twitter",
    "Delisted"
  ),
  createData(254817, "23 Sep 2023", "https://google.com", "Google", "Removed"),
];

const TableCellStyle = {
  fontSize: "12px",
  fontWeight: "700",
  color: "#A1A5B7",
};

export default function TableComponent() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  ...TableCellStyle,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox />
                ID
              </TableCell>
              <TableCell align="center" sx={TableCellStyle}>
                DATE REMOVED
              </TableCell>
              <TableCell align="center" sx={TableCellStyle}>
                LINK
              </TableCell>
              <TableCell align="center" sx={TableCellStyle}>
                SOURCE
              </TableCell>
              <TableCell align="center" sx={TableCellStyle}>
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ width: "auto" }}>
                  <Checkbox />
                  {row.Id}
                </TableCell>
                <TableCell align="center" sx={TableCellStyle}>
                  {row.date}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ ...TableCellStyle, fontWeight: 400 }}
                >
                  <a href={row.link}>{row.link}</a>
                </TableCell>
                <TableCell align="center" sx={TableCellStyle}>
                  {row.source}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    ...TableCellStyle,
                    color: `${
                      row.action === "Delisted" ? "#F1416C" : "#50CD89"
                    }`,
                  }}
                >
                  {row.action}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          margin: "2rem 0",
          justifyContent: "flex-end",
        }}
      >
        <Pagination
          count={5}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
}
