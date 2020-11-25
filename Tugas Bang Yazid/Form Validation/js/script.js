
  function validasi(){
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let waktu = document.getElementById('waktu').value;
    let destinasi = document.getElementById('destinasi').value;
    let tiket = document.getElementById('tiket').value;

    if (nama == "" || nama.leght >30) {
      alert("nama tidak boleh kosong");
    }else if (email == "") {
      alert("email tidak boleh kosong");
    }else if (waktu == "") {
      alert("waktu tidak boleh kosong");
    }else if (destinasi == "") {
      alert("destinasi tidak boleh kosong");
    }else if (tiket == "") {
      alert("tiket tidak boleh kosong");
    }
    else{
      document.getElementById('namapelanggan').innerHTML = 'nama pelanggan :'+ nama + '<br>'
      document.getElementById('emailpelanggan').innerHTML = 'email :' +email+'<br>'
      document.getElementById('waktupemberangkatan').innerHTML = 'waktu pemberangkatan :' +waktu+'<br>'
      document.getElementById('destinasipelanggan').innerHTML = 'destinasi pelanggan :' +destinasi+'<br>'
      document.getElementById('tiketpelanggan').innerHTML = 'tiket pelanggan :' +tiket+ '<br>'
    }
    
  }
