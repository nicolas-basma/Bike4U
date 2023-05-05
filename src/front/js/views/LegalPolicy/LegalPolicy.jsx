import React from "react";
import {useIntl, FormattedMessage} from "react-intl";

import "./LegalPolicy.css";

const LegalPolicy = () => {
  const intl = useIntl();

  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              id="accordionButtonCollapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
               <div dangerouslySetInnerHTML={{__html: intl.formatMessage({id:"legalAdvisoryTitle"})}}>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div dangerouslySetInnerHTML={{__html: intl.formatMessage({id:"legalAdvisoryBody"})}}>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              id="accordionButtonCollapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
                <div dangerouslySetInnerHTML={{__html: intl.formatMessage({id:"privacyPolyticsTitle"})}}>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            <div dangerouslySetInnerHTML={{__html: intl.formatMessage({id:"privacyPolyticsBody"})}}>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              id="accordionButtonCollapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <div dangerouslySetInnerHTML={{__html: intl.formatMessage({id:"cookiesPolicyTitle"})}}>
              </div>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            <div dangerouslySetInnerHTML={{__html: intl.formatMessage({id:"cookiesPolicyBody"})}}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalPolicy;
