import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
export default function DeleteContact() {
  // delete data via api
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  // delete data frm api http://localhost:8000/tasks
  useEffect(() => {
    axios.delete(`http://localhost:8000/contact-us/${id}`).then(() => {
      // pass a messages of delete data
      Swal.fire({
        text: "Your data successfully deleted!",
        icon: "error",
      });

      navigate("/admin-login/manage-contact");
    });
  });
  return <div></div>;
}
