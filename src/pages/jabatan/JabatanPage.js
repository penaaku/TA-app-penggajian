import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const JabatanPage = () => {
  const navigate = useNavigate();
  return (
    <NavigationWidget
      buttonCreate={
        <Button onClick={() => navigate("/user/add")}>
          <VscAdd />  Tambah
        </Button>
      }
      actionTop={
        <InputGroup >
          <Form.Control />
          <Button size="sm" variant="outline-secondary">
            <FaSearch />  Search
          </Button>
        </InputGroup>
      }
    >
      <Card className="mt-2">
        <Card.Header className="bg-secondary text-light">
          <h5>Profil</h5>
        </Card.Header>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Jabatan</th>
              <th>Tunjangan Jabatan</th>
              <th>Tunjangan-01</th>
              <th>Tunjangan-02</th>
              <th>Tunjangan-03</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JB-001</td>
              <td>HRD</td>
              <td>200000</td>
              <td>Tunjangan-01</td>
              <td>Tunjangan-02</td>
              <td>Tunjangan-03</td>
              <td className="d-flex gap-2">
                <Button variant="success" size="sm">
                  <FiEdit />
                </Button>
                <Button variant="danger" size="sm">
                  <RiDeleteBin5Fill />{" "}
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default JabatanPage;
