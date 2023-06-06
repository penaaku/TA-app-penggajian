import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLoginPage from "./pages/auth/AuthLoginPages";
import UserPage from "./pages/user/UserPage";
import UserAddPage from "./pages/user/UserAddPage";
import ProfilPage from "./pages/profil/ProfilPage";
import KaryawanPage from "./pages/karyawan/KaryawanPage";
import JabatanPage from "./pages/jabatan/JabatanPage";
import GolonganPage from "./pages/golongan/GolonganPage";
import PendapatanPage from "./pages/pendapatan/PendapatanPage";
import PotonganPage from "./pages/potongan/PotonganPage";
// import BarangListPage from "./pages/barang/BarangListPage";
// import BarangAddPage from "./pages/barang/BarangAddPage";
// import BarangEditPage from "./pages/barang/BarangEditPage";
// import PemasokListPage from "./pages/pemasok/PemasokListPage";
// import PemasokAddPage from "./pages/pemasok/PemasokAddPage";
// import PemasokEditPage from "./pages/pemasok/PemasokEditPage";
// import PembelianListPage from "./pages/pembelian/PembelianListPage";
// import PembelianAddPage from "./pages/pembelian/PembelianAddPage";
// import ReportingPembelian from "./pages/reporting/ReportingPembelian";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/add" element={<UserAddPage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/karyawan" element={<KaryawanPage />} />
        <Route path="/jabatan" element={<JabatanPage />} />
        <Route path="/golongan" element={<GolonganPage />} />
        <Route path="/pendapatan" element={<PendapatanPage />} />
        <Route path="/potongan" element={<PotonganPage />} />

        {/* <Route path="/barang" element={<BarangListPage />} />
        <Route path="/barang/add" element={<BarangAddPage />} />x 
        <Route path="/barang/edit/:kodeBarang" element={<BarangEditPage />} />
        <Route path="/pemasok" element={<PemasokListPage />} />
        <Route path="/pemasok/add" element={<PemasokAddPage />} />
        <Route path="/pemasok/edit/:kodePemasok" element={<PemasokEditPage />} />
        <Route path="/pembelian" element={<PembelianListPage />} />
        <Route path="/pembelian/add" element={<PembelianAddPage />} />
        <Route path="/reporting/pembelian" element={<ReportingPembelian />} /> */}
        {/* <Route path="/" element={<ContainerOutletWidget />}>
          <Route index element={<LoginPage />} />
          <Route path="/pos" element={<POSPage />} />
          <Route path="/pos/print" element={<POSPrintPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
