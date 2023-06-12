import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfilService from "../../services/ProfilService";

const ProfilPage = () => {
  const navigate = useNavigate();
  const [daftarProfil, setDaftarProfil] = useState({});
  const [paginateProfil, setPaginateProfil] = useState([]);
  const [queryProfil, setQueryProfil] = useState({ page: 1, limit: 10 });

  useEffect(() => {
    ProfilService.list(daftarProfil)
      .then((response) => {
        setDaftarProfil(response.data);
        if (response.headers.pagination) {
          setPaginateProfil(JSON.parse(response.headers.pagination));
        }
      })
      .catch((error) => console.log(error));
  }, [queryProfil]);

  const callbackPaginator = (page) => {
    setQueryProfil((values) => ({ ...values, page }));
  };

  const callbackProfilSearchInlineWidget = (query) => {
    setQueryProfil((values) => ({ ...values, ...query }));
  };
  return (
    <NavigationWidget>
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
            </tr>
          </thead>
          <tbody>
            {daftarProfil.results &&
              daftarProfil.results.map((profil, index) => (
                <tr key={index}>
                  <td>{profil.ID_Profil}</td>
                  <td>{profil.Nama}</td>
                  <td>{profil.Alamat}</td>
                  <td>{profil.Telepon}</td>
                  <td>{profil.Fax}</td>
                  <td>{profil.Email}</td>
                  <td>{profil.Website}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default ProfilPage;
