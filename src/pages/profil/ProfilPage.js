import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const ProfilPage = () => {
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
              <th>Nama</th>
              <th>Alamat</th>
              <th>Telepon</th>
              <th>Fax</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID-001</td>
              <td>PT. Cendana Dua</td>
              <td>Jl. Setapak No.34 Jakarta</td>
              <td>111222333</td>
              <td>-</td>
              <td>cendana@gmail.com</td>
              <td>www.cendanadua.com</td>
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

export default ProfilPage;
