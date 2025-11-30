// inisialisasi
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const errorMsg = document.getElementById("error-message");

// Event: tambah tugas baru
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = input.value.trim();

  if (text === "") {
    errorMsg.textContent = "Tugas tidak boleh kosong!";
    return;
  }

  errorMsg.textContent = "";

  // buat elemen li baru
  const li = document.createElement("li");
  li.className = "todo-item";

  li.innerHTML = `
    <span class="todo-text">${text}</span>
    <div class="todo-actions">
      <button class="btn-complete">Selesai</button>
      <button class="btn-delete">Hapus</button>
    </div>
  `;

  list.appendChild(li);
  input.value = "";
});

// Event: tugas selesai (pakai event delegation)
list.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-complete")) {
    const item = e.target.closest(".todo-item");
    item.classList.toggle("completed");
  }

  // Event: tugas dihapus
  if (e.target.classList.contains("btn-delete")) {
    const item = e.target.closest(".todo-item");
    item.remove();
  }
});// inisialisasi

// Event: tambah tugas baru

// Event: tugas selesai

// Event: tugas dihapus

