// Remove mocks during prod build
import {ProductList} from "../models/product-list";
import {ProductListItem} from "../models/product-list-item";
import {ProductCategory} from "../models/product-category";
export const ProductListMock:ProductList =
  new ProductList("Меню 2016", [
    new ProductCategory("Салати", [
      new ProductListItem("Салата с белени домати и френско козе сирене", "френско козе сирене, домати, гъби, дресинг, свеж босилек, копър, магдано", 1),
      new ProductListItem("Градинска салата с ароматни пилешки филенца", "(червена салата, зелена салата, айсберг, краставица, моркови, чери домати, рукола, маслини, израелски сос) салатата се сервира с охладени филенца", 2),
      new ProductListItem("Зелена салата с марокански кус-кус и риба тон", "(свежа салата, риба тон, кус-кус, маслини каламата, домати, краставици, моркови, дресинг)", 3)
    ]),
    new ProductCategory("Пици", [
      new ProductListItem("Маргарита", "(доматен сос, кашкавал)", 4),
      new ProductListItem("Kоща", "(доматен сос, кашкавал, шунка, гъби)", 5),
      new ProductListItem("Али Баба", "(доматен сос, кашкавал, шунка, луканка,кисели краставички)", 6),
      new ProductListItem("Гъбена", "(доматен сос, кашкавал, гъби)", 7)
    ]),
    new ProductCategory("Спагети", [
      new ProductListItem("Спагети с пушена съомга и сушени домати", "(спагети, пушена съомга, сушени домати, чери домати, рукола, сметана)", 8),
      new ProductListItem("Корлеоне", "(сметана, кашкавал, шунка, гъби, ядки, магданоз)", 9),
      new ProductListItem("Попай", "(сметана, кашкавал, пушено сирене, шунка, спанак)", 10)
    ])
  ]);
