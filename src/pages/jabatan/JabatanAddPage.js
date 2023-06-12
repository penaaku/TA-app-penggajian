import { Button, Card, Form } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidget";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import JabatanService from "../../services/JabatanService";

const JabatanAddPage = () => {
  const navigate = useNavigate();
  const [Jabatan, setJabatan] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setJabatan((values) => ({ ...values, [name]: value }));
  };

  const handleJabatanServiceCreate = () => {
    JabatanService.create(Jabatan).then((response) => {
      alert("Jabatan berhasil ditambahkan.");
      navigate("/Jabatan");
    });
  };

  return (
    <NavigationWidget
      actionTop={
        <>
          <Button className="me-2" variant="secondary" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Kembali
          </Button>
          <Button onClick={handleJabatanServiceCreate}>
            <FaSave /> Simpan
          </Button>
        </>
      }
    >
      <Card>
        <Card.Header>
          <h5>Tambah Jabatan</h5>
        </Card.Header>
        <Card.Body>
          <Form.Group>
            <Form.Label>ID Jabatan</Form.Label>
            <Form.Control name="ID_Jabatan" value={Jabatan.ID_Jabatan || ""} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Nama Jabatan</Form.Label>
            <Form.Control name="Nama_Jabatan" value={Jabatan.Nama_Jabatan || ""} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Tunjangan Jabatan</Form.Label>
            <Form.Control name="Tunjangan_Jabatan" value={Jabatan.Tunjangan_Jabatan || ""} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Tunjangan Keluarga</Form.Label>
            <Form.Control name="Tunjangan_Keluarga" value={Jabatan.Tunjangan_Keluarga || ""} onChange={handleInput} />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Tunjangan Anak</Form.Label>
            <Form.Control name="Tunjangan_Anak" value={Jabatan.Tunjangan_Anak || ""} onChange={handleInput} />
          </Form.Group>
        </Card.Body>
      </Card>
    </NavigationWidget>
  );
};

export default JabatanAddPage;
