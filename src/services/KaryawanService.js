import config from "../config";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const KaryawanService = {};
const CONFIG_HTTP = {
  headers: {
    "x-access-token": AuthService.getToken(),
  },
};

KaryawanService.list = (query) => {
  CONFIG_HTTP.params = query;
  return HTTPService.get(`${config.BASE_URL}/karyawan`, CONFIG_HTTP);
};

KaryawanService.create = (karyawan) => {
  return HTTPService.post (`${config.BASE_URL}/karyawan`, karyawan, CONFIG_HTTP);
};

// BarangService.get = (kodeBarang) => {
//   CONFIG_HTTP.params = null;
//   return HTTPService.get(
//     `${config.BASE_URL}/barang/${kodeBarang}`,
//     CONFIG_HTTP
//   );
// };

// BarangService.edit = (kodeBarang, barang) => {
//   CONFIG_HTTP.params = null;
//   return HTTPService.put(
//     `${config.BASE_URL}/barang/${kodeBarang}`,
//     barang,
//     CONFIG_HTTP
//   );
// };

// BarangService.delete = (kodeBarang) => {
//   CONFIG_HTTP.params = null;
//   return HTTPService.delete(
//     `${config.BASE_URL}/barang/${kodeBarang}`,
//     CONFIG_HTTP
//   );
// };

export default KaryawanService;
