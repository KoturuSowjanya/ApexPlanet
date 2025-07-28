
    function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (taskText === "") return;

      const li = document.createElement("li");
      li.textContent = taskText;
      li.onclick = () => li.classList.toggle("completed");

      const delBtn = document.createElement("button");
      delBtn.textContent = "x";
      delBtn.className ="delete-btn";
      delBtn.onclick = (e) => {
        e.stopPropagation();
        li.remove();
      };

      li.appendChild(delBtn);
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }

    
    function submitForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return false;
      }

      alert(`Thanks, ${name}! Your message has been received.`);
      return false; 
    }