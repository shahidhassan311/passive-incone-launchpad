import React from "react";
import classNames from "classnames";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Label,Input,ButtonGroup,Button } from "reactstrap";
import ProjectSmallCard from "./project-small-card";

function ExploreProject() {
    const [grpName, setgrpName] = React.useState("all");
  const setgrpNameData = (name) => {
    setgrpName(name);
  };
    return (
        <>
            <div className="content">

    <div className="row">
            {/* <div className="col-sm-12 mb-10">
              <div data-toggle="buttons" className="btn-group btn-group-toggle">
                <label id="all" className="btn btn-xs btn-primary btn-simple active">
                  <input type="radio" name="options" autoComplete="off" /> All 
                  </label>
                  <label id="inprogress" className="btn btn-xs btn-primary btn-simple">
                    <input type="radio" name="options" autoComplete="off" /> In progress 
                    </label>
                  <label id="comingsoon" className="btn btn-xs btn-primary btn-simple">
                      <input type="radio" name="options" autoComplete="off" /> Coming soon </label>
                      <label id="success" className="btn btn-xs btn-primary btn-simple">
                        <input type="radio" name="options" autoComplete="off" /> Success </label>
                        <label id="failed" className="btn btn-xs btn-primary btn-simple">
                          <input type="radio" name="options" autoComplete="off" /> Failed </label>
                          </div>
                          </div> */}
             <div className="col-sm-12 mb-10">
                    <ButtonGroup
                      className="btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: grpName === "all",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setgrpNameData("all")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          All
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: grpName === "inprogress",
                        })}
                        onClick={() => setgrpNameData("inprogress")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          InProgress
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: grpName === "commingSoon",
                        })}
                        onClick={() => setgrpNameData("commingSoon")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Comming Soon
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                </Button>
                       <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: grpName === "success",
                        })}
                        onClick={() => setgrpNameData("success")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Success
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                </Button>
                       <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: grpName === "failed",
                        })}
                        onClick={() => setgrpNameData("failed")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Failed
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </div>
    <div className="col-md-4">
      <ProjectSmallCard></ProjectSmallCard>
    </div>
    <div className="col-md-4" >
      <ProjectSmallCard></ProjectSmallCard>
    </div>
    <div className="col-md-4">
      <ProjectSmallCard></ProjectSmallCard>
    </div>
    <div className="col-md-4">
      <ProjectSmallCard></ProjectSmallCard>
    </div>
    <div className="col-md-4">
      <ProjectSmallCard></ProjectSmallCard>
    </div>
    <div className="col-md-4">
      <ProjectSmallCard></ProjectSmallCard>
    </div>
  </div>
                </div>
                
  </>
  )
}

export default ExploreProject;
