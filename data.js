// Company & product data — edit here, no database needed.

const COMPANY = {
  nameEn: "Shenzhen Wanchong Pet Products Co., Ltd.",
  nameZh: "深圳市湾宠宠物用品有限公司",
  nameTh: "บริษัท เซินเจิ้น หวานฉง เพ็ท โปรดักส์ จำกัด",
  founded: 2016,
  staff: 100,
  factoryArea: "2,800 m²",
  address: {
    en: "A2, Fucheng Industrial Park, No. 18 Zhongxin Road, Pingxi Community, Pingdi Street, Longgang District, Shenzhen, China",
    zh: "深圳市龙岗区坪地街道坪西社区中心路18号富成工业园A2",
    th: "A2 สวนอุตสาหกรรม Fucheng เลขที่ 18 ถนน Zhongxin ตำบล Pingxi ถนน Pingdi เขต Longgang เมืองเซินเจิ้น ประเทศจีน",
  },
  contact: {
    person: "Ms. Huang",
    whatsappDisplay: "+86 755 2322 0000",
    email: "sales@wanchong-pet.example",
    line: "wanchong_pet",
  },
};

const STATS = [
  { value: "2016", labelEn: "Established", labelZh: "成立年份", labelTh: "ก่อตั้ง" },
  { value: "100+", labelEn: "Staff", labelZh: "员工人数", labelTh: "พนักงาน" },
  { value: "2,800 m²", labelEn: "Factory Area", labelZh: "厂房面积", labelTh: "พื้นที่โรงงาน" },
  { value: "Harness · Bowl · Pee Pad", labelEn: "Core Products", labelZh: "主营产品", labelTh: "สินค้าหลัก" },
];

const PRODUCTS = [
  { sku: "WC-01", nameEn: "Harness + Leash Set", nameZh: "胸背+牵引套装", nameTh: "ชุดสายรัดและสายจูง", material: "Nylon + Zinc Alloy", spec: "S/M/L", moq: "60 sets", fob: "USD 2.40–4.80 /set", thb: "฿70–140 /set", image: "images/WC-01.jpg" },
  { sku: "WC-02", nameEn: "Nylon Collar", nameZh: "尼龙项圈", nameTh: "ปลอกคอไนลอน", material: "Nylon", spec: "Multiple sizes", moq: "100 pcs", fob: "USD 0.55–1.10 /pc", thb: "฿18–35 /pc", image: "images/WC-02.jpg" },
  { sku: "WC-03", nameEn: "Bowl & Pad Visual", nameZh: "不锈钢碗+尿垫组合图", nameTh: "ชามและแผ่นรอง", material: "Stainless Steel / Non-woven", spec: "Catalog visual", moq: "—", fob: "—", thb: "—", image: "images/WC-03.jpg" },
  { sku: "WC-04", nameEn: "Slow Feeder Bowl", nameZh: "慢食碗", nameTh: "ชามกินช้า", material: "PP + TPR", spec: "Ø20cm", moq: "80 pcs", fob: "USD 1.20–2.20 /pc", thb: "฿45–85 /pc", image: "images/WC-04.jpg" },
  { sku: "WC-05", nameEn: "Pee Pad M, 50pcs", nameZh: "尿垫M号50片", nameTh: "แผ่นรองฉี่ M", material: "Non-woven + PE", spec: "45×60cm", moq: "40 packs", fob: "USD 2.40–4.20 /pack", thb: "฿80–130 /pack", image: "images/WC-05.jpg" },
  { sku: "WC-06", nameEn: "Waste Bag Dispenser", nameZh: "拾便袋分配器", nameTh: "กล่องถุงเก็บมูล", material: "PP + PE bags", spec: "Incl. 1 roll", moq: "200 pcs", fob: "USD 0.35–0.70 /pc", thb: "฿12–28 /pc", image: "images/WC-06.jpg" },
  { sku: "WC-07", nameEn: "Grooming Glove", nameZh: "梳毛手套", nameTh: "ถุงมือแปรงขน", material: "Polyester + TPR", spec: "One size", moq: "150 pcs", fob: "USD 0.45–0.90 /pc", thb: "฿15–32 /pc", image: "images/WC-07.jpg" },
  { sku: "WC-08", nameEn: "Travel Water Bottle", nameZh: "外出水杯", nameTh: "ขวดน้ำพกพา", material: "PP + Silicone", spec: "400ml", moq: "100 pcs", fob: "USD 1.10–1.90 /pc", thb: "฿40–75 /pc", image: "images/WC-08.jpg" },
  { sku: "WC-09", nameEn: "Steel Bowl, 4 Sizes", nameZh: "不锈钢碗四件套", nameTh: "ชามสแตนเลส 4 ไซส์", material: "201 Steel", spec: "8–40oz", moq: "50 sets", fob: "USD 2.80–5.20 /set", thb: "฿90–170 /set", image: "images/WC-09.jpg" },
  { sku: "WC-10", nameEn: "Anti-Skid Steel Bowl", nameZh: "防滑不锈钢碗", nameTh: "ชามกันลื่น", material: "201 Steel + Rubber Ring", spec: "Ø16cm", moq: "100 pcs", fob: "USD 0.90–1.70 /pc", thb: "฿30–55 /pc", image: "images/WC-10.jpg" },
];
