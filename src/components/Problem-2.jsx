import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";

const Problem2 = () => {
  const [allContactsModalShow, setAllContactsModalShow] = useState(false);
  const [usContactsModalShow, setUsContactsModalShow] = useState(false);
  const [allContacts, setAllContacts] = useState([]);
  const [usContacts, setUSContacts] = useState([]);
  const [onlyEvent, setOnlyEvent] = useState(false);
  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => res.json())
      .then((data) => setAllContacts(data?.results).catch());
    fetch("https://contact.mediusware.com/api/country-contacts/United States/")
      .then((res) => res.json())
      .then((data) => setUSContacts(data?.results).catch());
  }, []);
  console.log(allContacts);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => setAllContactsModalShow(true)}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => setUsContactsModalShow(true)}
          >
            US Contacts
          </button>
        </div>
      </div>
      <Modal
        show={allContactsModalShow}
        onHide={() => setAllContactsModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            All Contacts
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Country Name</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {onlyEvent &&
                allContacts &&
                allContacts
                  ?.filter((item) => item?.id % 2 == 0)
                  ?.map((singleContacts, index) => (
                    <tr key={index}>
                      <td scope="col">{singleContacts?.id}</td>
                      <td scope="col">{singleContacts?.country?.name}</td>
                      <td scope="col">{singleContacts?.phone}</td>
                    </tr>
                  ))}
              {!onlyEvent &&
                allContacts &&
                allContacts?.map((singleContacts, index) => (
                  <tr key={index}>
                    <td scope="col">{singleContacts?.id}</td>
                    <td scope="col">{singleContacts?.country?.name}</td>
                    <td scope="col">{singleContacts?.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={(e) => setOnlyEvent(!onlyEvent)}
            />
            <label className="form-check-label">Only Event</label>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={usContactsModalShow}
        onHide={() => setUsContactsModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            All United States Contacts
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Country Name</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {onlyEvent &&
                usContacts &&
                usContacts
                  ?.filter((item) => item?.id % 2 == 0)
                  ?.map((singleContacts, index) => (
                    <tr key={index}>
                      <td scope="col">{singleContacts?.id}</td>
                      <td scope="col">{singleContacts?.country?.name}</td>
                      <td scope="col">{singleContacts?.phone}</td>
                    </tr>
                  ))}
              {!onlyEvent &&
                usContacts &&
                usContacts?.map((singleContacts, index) => (
                  <tr key={index}>
                    <td scope="col">{singleContacts?.id}</td>
                    <td scope="col">{singleContacts?.country?.name}</td>
                    <td scope="col">{singleContacts?.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              onClick={(e) => setOnlyEvent(!onlyEvent)}
            />
            <label className="form-check-label">Only Event</label>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Problem2;
