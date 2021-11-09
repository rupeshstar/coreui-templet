import React, { useState } from "react";

import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
} from "@coreui/react";
import { DocsCallout, DocsExample } from "src/components";

const Breadcrumbs = () => {
  const [modelFile, setModelFile] = useState();
  const [developmentFile, setDevelopmentFile] = useState();
  const [monitoringFile, setMonitoringFile] = useState();
  //   {
  //   modelObject: '',
  //   development: '',
  //   monitoring: '',
  // }
  // const inputChangeFile = (event) => {

  //   setSelectedFile(event.target.files[0]);
  //   console.log("xxxxx");

  //   setSelectedFile((prevalue) => {
  //     return {
  //       ...prevalue,
  //       [event.target.name]: event.target.files[0],
  //     }

  //     //   if (name === "fname") {
  //     //     return { fName: value, lName: prevalue.lName };
  //     //   } else if (name === "lname") {
  //     //     return { fName: prevalue.fName, lName: value };
  //     //   }
  //   })
  // };
  // setSelectedFile(event.target.files[0])
  const onSubmits = (event) => {
    event.preventDefault();
    sendForm();
  };
  const sendForm = () => {
    const formData = new FormData();
    formData.append("model", modelFile);
    formData.append("development", developmentFile);
    formData.append("monitoring", monitoringFile);
    // formData.append('year', field.examYear)
    // formData.append('fileNo', field.fileNo)
    // formData.append('fullMarks', field.fullMarks)
    // formData.append('totalQuestion', field.totalQuestion)
    //test purpose https://www.mockachino.com/
    const url = "https://www.mockachino.com/83b6ef2d-5148-41/users";
    const params = {
      method: "POST",
      // headers: {
      //   "content-type": "multipart/form-data",
      // },
      body: formData,
    };
    fetch(url, params)
      .then((response) => response.json())
      .then((json) => {
        console.log("%cBreadcrumbs.js line:73 json", "color: #007acc;", json);
        // if (json.success) {
        //   alert(json.message);
        // } else {
        //   alert("Not Uploaded!!");
        // }
      });
  };

  return (
    <>
      <h1>Data Input</h1>
      {/* <form onSubmit={onSubmits}>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
            }}
            name="monitoring"
            
          />
          <label className="custom-file-label" for="customFile">
            Choose file
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form> */}
      <CForm className="row g-3" onSubmit={onSubmits}>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Model Object (.rds)File</CFormLabel>
          <CFormInput
            type="file"
            id="formFile"
            onChange={(e) => {
              setModelFile(e.target.files[0]);
            }}
            name="model"
            // value={selectedFile.modelObject}
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Development Data</CFormLabel>
          <CFormInput
            type="file"
            id="formFile"
            onChange={(e) => {
              setDevelopmentFile(e.target.files[0]);
            }}
            name="development"
            // value={selectedFile.development}
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Monitoring Data</CFormLabel>
          <CFormInput
            type="file"
            id="formFile"
            onChange={(e) => {
              setMonitoringFile(e.target.files[0]);
            }}
            name="monitoring"
            // value={selectedFile}
          />
        </div>
        <CCol xs={12}>
          <CButton type="submit">Upload</CButton>
        </CCol>
      </CForm>

      {/* <CRow>
        <CCol xs={12}>
          <DocsCallout name="Breadcrumb" href="components/breadcrumb" />
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>React Breadcrumb</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                The breadcrumb navigation provides links back to each previous page the user
                navigated through and shows the current location in a website or an application. You
                don’t have to add separators, because they automatically added in CSS through{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
                  {' '}
                  <code>::before</code>
                </a>{' '}
                and{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
                  {' '}
                  <code>content</code>
                </a>
                .
              </p>
              <DocsExample href="components/breadcrumb">
                <CBreadcrumb>
                  <CBreadcrumbItem>
                    <CLink href="#">Home</CLink>
                  </CBreadcrumbItem>
                  <CBreadcrumbItem active>Library</CBreadcrumbItem>
                </CBreadcrumb>
                <CBreadcrumb>
                  <CBreadcrumbItem>
                    <CLink href="#">Home</CLink>https://www.mockachino.com/83b6ef2d-5148-41/

                    <CLink href="#">Library</CLink>
                  </CBreadcrumbItem>
                  <CBreadcrumbItem>
                    <CLink href="#">Data</CLink>
                  </CBreadcrumbItem>
                  <CBreadcrumbItem active>Bootstrap</CBreadcrumbItem>
                </CBreadcrumb>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </>
  );
};

export default Breadcrumbs;
