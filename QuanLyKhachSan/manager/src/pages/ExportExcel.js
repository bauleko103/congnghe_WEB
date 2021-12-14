import { useState, useEffect } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "bootstrap/dist/css/bootstrap.min.css";
const ExportExcel = () => {
  const [result, setResult] = useState([]);

  const getData = () => {
    fetch(
      "https://architecture-manage.herokuapp.com/api/architects?fbclid=IwAR3wX6oJnV9inBda8m2eS7qK7GSvb5_t1hjBraLNuNCsFVCVvvl9pl5_rEs"
    )
      .then((response) => response.json())
      .then((res) => setResult(res));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="container">
      <h3 className="mt-3 text-success">
        <center>Danh sách khách hàng </center>
      </h3>
      <div className="row mt-4">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button btn btn-success mb-3"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Xuất file Excel"
        />
        <table className="table" id="table-to-xls">
          <thead className="thead-dark">
            <tr>
              <th>Tên Khách Hàng</th>
              <th>Loại Khách Hàng</th>
            </tr>
          </thead>
          <tbody>
            {result.map((res) => (
              <tr>
                <td>{res.name}</td>
                <td>{res.subtitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ExportExcel;
