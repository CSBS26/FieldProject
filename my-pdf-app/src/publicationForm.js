import React, { useState } from "react";

function PublicationForm() {
  const [formData, setFormData] = useState({
    publicationId: "",
    publicationTitle: "",
    publicationType: "",
    conferenceOrJournal: "Select",
    conferenceName: "",
    journalName: "",
    VolumeNumber: "",
    PageNumber: "",
    issueNumber: "",
    levelOfCirculation: "",
    dateOfPublication: "",
    indexedIn: "",
    indexProof: "",
    ISSNnumber: "",
    impactFactor: "",
    Scoups: "",
    webOfScience: "",
    SCI: "",
    UCGRated: "",
    ugcProof: "",
    hIndex: "",
    citationCnt: "",
    affiliatingInstitute: "",
    publisherName: "",
    paperLink: "",
    journalLink: "",
    proof: "",
    orcidId: "",
    vidwanId: "",
    technology: "",
    domain: "",
    branch: "",
    industry: "",
    foreignAuthor: "",
    publicationStatus: "",
    studentPresence: "",
    bestPaperAwarded: "",
    Q1Q2Q3Q4: "",
    facultyName: "",
    facultyId: "",
    designation: "",
    dept: "",
    authorIds: ["", "", "", "", "", "", ""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("Author_ID")) {
      const index = parseInt(name.split("_")[1]) - 1;
      setFormData((prevData) => {
        const newAuthorIds = [...prevData.authorIds];
        newAuthorIds[index] = value;
        return { ...prevData, authorIds: newAuthorIds };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://sheetdb.io/api/v1/ohpviljncwcoi", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            publicationId: formData.publicationId,
            publicationTitle: formData.publicationTitle,
            publicationType: formData.publicationType,
            conferenceOrJournal: formData.conferenceOrJournal,
            conferenceName: formData.conferenceName,
            journalName: formData.journalName,
            VolumeNumber: formData.VolumeNumber,
            PageNumber: formData.PageNumber,
            issueNumber: formData.issueNumber,
            levelOfCirculation: formData.levelOfCirculation,
            dateOfPublication: formData.dateOfPublication,
            indexedIn: formData.indexedIn,
            indexProof: formData.indexProof,
            ISSNnumber: formData.ISSNnumber,
            impactFactor: formData.impactFactor,
            Scoups: formData.Scoups,
            webOfScience: formData.webOfScience,
            SCI: formData.SCI,
            UCGRated: formData.UCGRated,
            ugcProof: formData.ugcProof,
            hIndex: formData.hIndex,
            citationCnt: formData.citationCnt,
            affiliatingInstitute: formData.affiliatingInstitute,
            publisherName: formData.publisherName,
            paperLink: formData.paperLink,
            journalLink: formData.journalLink,
            proof: formData.proof,
            orcidId: formData.orcidId,
            vidwanId: formData.vidwanId,
            technology: formData.technology,
            domain: formData.domain,
            branch: formData.branch,
            foreignAuthor: formData.foreignAuthor,
            publicationStatus: formData.publicationStatus,
            studentPresence: formData.studentPresence,
            bestPaperAwarded: formData.bestPaperAwarded,
            Q1Q2Q3Q4: formData.Q1Q2Q3Q4,
            facultyName: formData.facultyName,
            facultyId: formData.facultyId,
            designation: formData.designation,
            dept: formData.dept,
            authorIds: formData.authorIds,
            industry: formData.industry,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const displaySelectedOption = () => {
    const selectedOption = formData.conferenceOrJournal;
    return {
      showConference:
        selectedOption === "conference" ||
        selectedOption === "conferenceAndJournal",
      showJournal:
        selectedOption === "journal" ||
        selectedOption === "conferenceAndJournal",
    };
  };

  const { showConference, showJournal } = displaySelectedOption();

  return (
    <div className="publication-form">
      <div className="header-container">
        <header>
          <div style={{ position: "relative", width: "100%" }}>
            <img
              src="https://media.licdn.com/dms/image/C560BAQFKt8O5GdaFjw/company-logo_200_200/0/1680080095222/vnr_vignanajyothiinstituteofengineeringandtechnology_logo?e=2147483647&v=beta&t=TbOLxNjzU1LYPUoXNYPFMXd3-pUKhPwWyyyFfOBZn08"
              alt="Your Logo"
              style={{
                width: "100px",
                height: "auto",
                float: "left",
                margin: "10px 15px 10px 0",
              }}
            />
            <h1>Publication Form</h1>
            <div className="logo">
              <b>VNRVJIET</b>
            </div>
          </div>
          <img
            src="https://pbs.twimg.com/profile_images/1688442970587201536/dCewVE4I_400x400.jpg"
            alt="Form Image"
            className="form-image"
          />
        </header>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="publication-info">
          <h2>Publication Information</h2>
          <div className="form-group">
            <label htmlFor="publicationId">
              Publication ID<span className="required">*</span>:
            </label>
            <input
              type="text"
              id="publicationId"
              name="publicationId"
              value={formData.publicationId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="publicationTitle">Publication Title:</label>
            <input
              type="text"
              id="publicationTitle"
              name="publicationTitle"
              value={formData.publicationTitle}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="publicationType">Publication Type:</label>
            <input
              type="text"
              id="publicationType"
              name="publicationType"
              value={formData.publicationType}
              onChange={handleChange}
              size="25"
              placeholder="Journal/Article"
            />
          </div>
          <div className="form-group">
            <label htmlFor="conferenceOrJournal">Conference/Journal:</label>
            <select
              id="conferenceOrJournal"
              name="conferenceOrJournal"
              value={formData.conferenceOrJournal}
              onChange={handleChange}
            >
              <option value="Select">Select</option>
              <option value="conference">Conference</option>
              <option value="journal">Journal</option>
              <option value="conferenceAndJournal">
                Conference and Journal
              </option>
            </select>
          </div>
          {showConference && (
            <div className="form-group" id="conferenceNameContainer">
              <label htmlFor="conferenceName">Conference Name:</label>
              <input
                type="text"
                id="conferenceName"
                name="conferenceName"
                value={formData.conferenceName}
                onChange={handleChange}
                size="25"
              />
            </div>
          )}
          {showJournal && (
            <div className="form-group" id="journalNameContainer">
              <label htmlFor="journalName">Journal Name:</label>
              <input
                type="text"
                id="journalName"
                name="journalName"
                value={formData.journalName}
                onChange={handleChange}
                size="25"
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="VolumeNumber">Volume Number:</label>
            <input
              type="text"
              id="VolumeNumber"
              name="VolumeNumber"
              value={formData.VolumeNumber}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="PageNumber">Page Number:</label>
            <input
              type="text"
              id="PageNumber"
              name="PageNumber"
              value={formData.PageNumber}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="issueNumber">Issue Number:</label>
            <input
              type="text"
              id="issueNumber"
              name="issueNumber"
              value={formData.issueNumber}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="levelOfCirculation">Level Of Circulation:</label>
            <input
              type="text"
              id="levelOfCirculation"
              name="levelOfCirculation"
              value={formData.levelOfCirculation}
              onChange={handleChange}
              size="25"
              placeholder="National/International(dropdown)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfPublication">Date Of Publication:</label>
            <input
              type="date"
              id="dateOfPublication"
              name="dateOfPublication"
              value={formData.dateOfPublication}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="indexedIn">Indexed In:</label>
            <input
              type="text"
              id="indexedIn"
              name="indexedIn"
              value={formData.indexedIn}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="indexProof">Index Proof:</label>
            <input
              type="text"
              id="indexProof"
              name="indexProof"
              value={formData.indexProof}
              onChange={handleChange}
              size="25"
              placeholder="Insert URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ISSNnumber">ISSN/ISBN Number:</label>
            <input
              type="text"
              id="ISSNnumber"
              name="ISSNnumber"
              value={formData.ISSNnumber}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="impactFactor">Impact Factor:</label>
            <input
              type="text"
              id="impactFactor"
              name="impactFactor"
              value={formData.impactFactor}
              onChange={handleChange}
              size="25"
              placeholder="Floating point number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Scoups">Scoups:</label>
            <input
              type="text"
              id="Scoups"
              name="Scoups"
              value={formData.Scoups}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="webOfScience">Web Of Science:</label>
            <input
              type="text"
              id="webOfScience"
              name="webOfScience"
              value={formData.webOfScience}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="SCI">SCI:</label>
            <input
              type="text"
              id="SCI"
              name="SCI"
              value={formData.SCI}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="UCGRated">UGC Rated:</label>
            <input
              type="text"
              id="UCGRated"
              name="UCGRated"
              value={formData.UCGRated}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ugcProof">UGC Proof:</label>
            <input
              type="text"
              id="ugcProof"
              name="ugcProof"
              value={formData.ugcProof}
              onChange={handleChange}
              size="25"
              placeholder="Insert URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="hIndex">H-Index:</label>
            <input
              type="text"
              id="hIndex"
              name="hIndex"
              value={formData.hIndex}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="citationCnt">Citations Count:</label>
            <input
              type="text"
              id="citationCnt"
              name="citationCnt"
              value={formData.citationCnt}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="affiliatingInstitute">Affiliating Institute:</label>
            <input
              type="text"
              id="affiliatingInstitute"
              name="affiliatingInstitute"
              value={formData.affiliatingInstitute}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="publisherName">Publisher Name:</label>
            <input
              type="text"
              id="publisherName"
              name="publisherName"
              value={formData.publisherName}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="paperLink">Paper Link:</label>
            <input
              type="text"
              id="paperLink"
              name="paperLink"
              value={formData.paperLink}
              onChange={handleChange}
              size="25"
              placeholder="Insert URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="journalLink">Journal Link:</label>
            <input
              type="text"
              id="journalLink"
              name="journalLink"
              value={formData.journalLink}
              onChange={handleChange}
              size="25"
              placeholder="Insert URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="proof">Proof:</label>
            <input
              type="text"
              id="proof"
              name="proof"
              value={formData.proof}
              onChange={handleChange}
              size="25"
              placeholder="Insert URL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="orcidId">Orcid Id:</label>
            <input
              type="text"
              id="orcidId"
              name="orcidId"
              value={formData.orcidId}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="vidwanId">Vidwan Id:</label>
            <input
              type="text"
              id="vidwanId"
              name="vidwanId"
              value={formData.vidwanId}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="technology">Technology:</label>
            <input
              type="text"
              id="technology"
              name="technology"
              value={formData.technology}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="domain">Domain:</label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="branch">Branch:</label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="industry">Industry:</label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="foreignAuthor">Foreign Author:</label>
            <input
              type="text"
              id="foreignAuthor"
              name="foreignAuthor"
              value={formData.foreignAuthor}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="publicationStatus">Publication Status:</label>
            <input
              type="text"
              id="publicationStatus"
              name="publicationStatus"
              value={formData.publicationStatus}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentPresence">Student Presence:</label>
            <input
              type="text"
              id="studentPresence"
              name="studentPresence"
              value={formData.studentPresence}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="bestPaperAwarded">Best Paper Awarded:</label>
            <input
              type="text"
              id="bestPaperAwarded"
              name="bestPaperAwarded"
              value={formData.bestPaperAwarded}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Q1Q2Q3Q4">Q1/Q2/Q3/Q4:</label>
            <input
              type="text"
              id="Q1Q2Q3Q4"
              name="Q1Q2Q3Q4"
              value={formData.Q1Q2Q3Q4}
              onChange={handleChange}
              size="25"
            />
          </div>
        </section>
        <section className="author-info">
          <h2>Author Information</h2>
          <div className="form-group">
            <label htmlFor="facultyName">Faculty Name:</label>
            <input
              type="text"
              id="facultyName"
              name="facultyName"
              value={formData.facultyName}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="facultyId">Faculty Id:</label>
            <input
              type="text"
              id="facultyId"
              name="facultyId"
              value={formData.facultyId}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              size="25"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dept">Department:</label>
            <input
              type="text"
              id="dept"
              name="dept"
              value={formData.dept}
              onChange={handleChange}
              size="25"
            />
          </div>
          {formData.authorIds.map((authorId, index) => (
            <div className="form-group" key={index}>
              <label htmlFor={`Author_ID_${index + 1}`}>
                Author_ID_{index + 1}:
              </label>
              <input
                type="text"
                id={`Author_ID_${index + 1}`}
                name={`Author_ID_${index + 1}`}
                value={authorId}
                onChange={handleChange}
                size="25"
              />
            </div>
          ))}
        </section>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PublicationForm;
