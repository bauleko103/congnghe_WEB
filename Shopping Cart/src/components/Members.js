const Member = () => {
  return (
    <>
      <h4 style={{ marginTop: "40px" }}>
        Tên thành viên trong nhóm: <i>CNW_0521</i>
      </h4>
      <table border="2px">
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>MSSV</th>
        </tr>
        <tr>
          <td className="textCenter">1</td>
          <td className="textCenter">Lê Chu Báu</td>
          <td className="textCenter">4501104017</td>
        </tr>
        <tr>
          <td className="textCenter">2</td>
          <td className="textCenter">Nguyễn Tấn Phong</td>
          <td className="textCenter">4501104174</td>
        </tr>
        <tr>
          <td className="textCenter">3</td>
          <td className="textCenter">Lê Chí Hải</td>
          <td className="textCenter">4501104066</td>
        </tr>
        <tr>
          <td className="textCenter">4</td>
          <td className="textCenter">Trương Quốc Hiệp</td>
          <td className="textCenter">4501104081</td>
        </tr>
        <tr>
          <td className="textCenter">5</td>
          <td className="textCenter">Phạm Nguyễn Hồng Nguyên</td>
          <td className="textCenter">4501104163</td>
        </tr>
      </table>
    </>
  );
};
export default Member;
