import { Button, Card, Form } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PendapatanService from "../../services/PendapatanService";

const PendapatanAddPage = () => {
  const navigate = useNavigate();
  const [Pendapatan, setPendapatan] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setPendapatan((values) => ({ ...values, [name]: value }));
  };

  const handlePendapatanServiceCreate = () => {
    PendapatanService.create(Pendapatan).then((response) => {
      alert("Pendapatan berhasil ditambahkan.");
      navigate("/Pendapatan");
    });
  };

  return (
    <NavigationWidget
      actionTop={
        <>
          <Button className="me-2" variant="secondary" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Kembali
          </Button>
          <Button onClick={handlePendapatanServiceCreate}>
            <FaSave /> Simpan
          </Button>
        </>
      }
    >
      <Card>
        <Card.Header>
          <h5>Tambah Pendapatan</h5>
        </Card.Header>
        <Card.Body>
          <Form.Group>
            <Form.Label>ID Pendapatan</Form.Label>
            <Form.Control name="ID_Pendapatan" value={Pendapatan.ID_Pendapatan || ""} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Nama Pendapatan</Form.Label>
            <Form.Control name="Nama_Pendapatan" value={Pendapatan.Nama_Pendapatan || ""} onChange={handleInput} />
          </Form.Group>
        </Card.Body>
      </Card>
    </NavigationWidget>
  );
};

export default PendapatanAddPage;
