// Remove mocks during prod build
import {ProductList} from "../models/product-list";
import {ProductListItem} from "../models/product-list-item";
import {ProductCategory} from "../models/product-category";
export const ProductListMock:ProductList =
  new ProductList([
    new ProductListItem("Салата с белени домати и френско козе сирене", "френско козе сирене, домати, гъби, дресинг, свеж босилек, копър, магдано", new ProductCategory("Салати")),
    new ProductListItem("Градинска салата с ароматни пилешки филенца", "(червена салата, зелена салата, айсберг, краставица, моркови, чери домати, рукола, маслини, израелски сос) салатата се сервира с охладени филенца", new ProductCategory("Салати")),
    new ProductListItem("Зелена салата с марокански кус-кус и риба тон", "(свежа салата, риба тон, кус-кус, маслини каламата, домати, краставици, моркови, дресинг)", new ProductCategory("Салати")),
    new ProductListItem("Маргарита", "(доматен сос, кашкавал)", new ProductCategory("Пици")),
    new ProductListItem("Kоща", "(доматен сос, кашкавал, шунка, гъби)", new ProductCategory("Пици")),
    new ProductListItem("Али Баба", "(доматен сос, кашкавал, шунка, луканка,кисели краставички)", new ProductCategory("Пици")),
    new ProductListItem("Гъбена", "(доматен сос, кашкавал, гъби)", new ProductCategory("Пици")),
    new ProductListItem("Спагети с пушена съомга и сушени домати", "(спагети, пушена съомга, сушени домати, чери домати, рукола, сметана)", new ProductCategory("Спагети")),
    new ProductListItem("Корлеоне", "(сметана, кашкавал, шунка, гъби, ядки, магданоз)", new ProductCategory("Спагети")),
    new ProductListItem("Попай", "(сметана, кашкавал, пушено сирене, шунка, спанак)", new ProductCategory("Спагети"))
  ]);
