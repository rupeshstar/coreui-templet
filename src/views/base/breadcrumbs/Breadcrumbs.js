import React, { useState } from 'react'

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
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Breadcrumbs = () => {
  const [selectedFile, setSelectedFile] = useState()
  //   {
  //   modelObject: '',
  //   development: '',
  //   monitoring: '',
  // }
  const inputChangeFile = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    console.log('%cBreadcrumbs.js line:29 event', 'color: #007acc;', event)
    setSelectedFile(event.target.files[0])
    console.log('xxxxx')
    // onSubmits()
    // setSelectedFile((prevalue) => {
    //   return {
    //     ...prevalue,
    //     [event.target.name]: event.target.files[0],
    //   }

    //   //   if (name === "fname") {
    //   //     return { fName: value, lName: prevalue.lName };
    //   //   } else if (name === "lname") {
    //   //     return { fName: prevalue.fName, lName: value };
    //   //   }
    // })
  }
  // setSelectedFile(event.target.files[0])
  const onSubmits = (event) => {
    // event.preventDefault()
    alert('ok')
    // setSelectedFile(event.target.files[0
    sendForm()
  }
  const sendForm = () => {
    const formData = new FormData()
    // formData.append('modelObject', selectedFile.modelObject)
    // formData.append('development', selectedFile.development)
    formData.append('monitoring', selectedFile)
    // formData.append('year', field.examYear)
    // formData.append('fileNo', field.fileNo)
    // formData.append('fullMarks', field.fullMarks)
    // formData.append('totalQuestion', field.totalQuestion)
    const url = 'https://www.mockachino.com/spaces/1e42b893-7c1b-41'
    const params = {
      method: 'POST',
      headers: {
        'content-type': 'multipart/form-data',
      },
      body: formData,
    }
    fetch(url, params)
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          alert(json.message)
        } else {
          alert('Not Uploaded!!')
        }
      })
  }

  return (
    <>
      <h1>Data Input</h1>
      <CForm className="row g-3" onSubmit={onSubmits}>
        {/* <div className="mb-3">
          <CFormLabel htmlFor="formFile">Model Object (.rds)File</CFormLabel>
          <CFormInput
            type="file"
            id="formFile"
            onChange={inputChangeFile}
            name="modelObject"
            value={selectedFile.modelObject}
          />
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Development Data</CFormLabel>
          <CFormInput
            type="file"
            id="formFile"
            onChange={inputChangeFile}
            name="development"
            value={selectedFile.development}
          />
        </div> */}
        <div className="mb-3">
          <CFormLabel htmlFor="formFile">Monitoring Data</CFormLabel>
          <CFormInput
            type="file"
            id="formFile"
            onChange={inputChangeFile}
            name="monitoring"
            value={selectedFile}
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
                    <CLink href="#">Home</CLink>
                  </CBreadcrumbItem>
                  <CBreadcrumbItem>
                    <CLink href="#">Library</CLink>
                  </CBreadcrumbItem>
                  <CBreadcrumbItem active>Data</CBreadcrumbItem>
                </CBreadcrumb>
                <CBreadcrumb>
                  <CBreadcrumbItem>
                    <CLink href="#">Home</CLink>
                  </CBreadcrumbItem>
                  <CBreadcrumbItem>
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
  )
}

export default Breadcrumbs
