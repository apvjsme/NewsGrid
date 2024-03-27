var id = 0;

var sell = () => {
  var province = frm.province.value;
  var dishName = frm.dishName.value;
  var price = parseFloat(frm.price.value);
  var imageLink = frm.imageLink.value;

  if (province && dishName && price) {
    id++;
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + province + "</td>";
    row += "<td>" + dishName + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + imageLink + "</td>";
    row += "</tr>";
    document.getElementById("tbody").innerHTML += row;

    var foods = JSON.parse(localStorage.getItem('foods')) || [];

    foods.push({
      province: province,
      dish_name: dishName,
      price: price.toFixed(2),
      image_link: imageLink
    });

    localStorage.setItem('foods', JSON.stringify(foods));

    alert('Dữ liệu đã được lưu thành công.');

    frm.reset();
  } else {
    alert('Vui lòng điền đầy đủ thông tin và đúng định dạng.');
  }
};

var cancel = () => {
  frm.province.value = "";
  frm.dishName.value = "";
  frm.price.value = "";
  frm.imageLink.value = "";
};
