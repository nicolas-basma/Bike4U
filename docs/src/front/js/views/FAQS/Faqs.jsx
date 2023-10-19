import React from "react";
import { FormattedMessage } from "react-intl";

import "./Faqs.css";

const Faqs = () => {
  return (
    <>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              id="accordionButtonCollapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <strong><FormattedMessage id="FAQs1" defaultMessage="Should I buy these bikes?"/></strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
            <FormattedMessage id="FAQs1a" defaultMessage="Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body."/>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              id="accordionButtonCollapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong><FormattedMessage id="FAQs2" defaultMessage="FAQ"/></strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
            <FormattedMessage id="FAQs2a" defaultMessage="Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body."/>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              id="accordionButtonCollapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong><FormattedMessage id="FAQs3" defaultMessage="FAQ"/></strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
            <FormattedMessage id="FAQs3a" defaultMessage="Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body."/>
            </div>
            
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              id="accordionButtonCollapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <strong><FormattedMessage id="FAQs4" defaultMessage="FAQ"/></strong>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
          <div class="accordion-body">
          <FormattedMessage id="FAQs4a" defaultMessage="Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body."/>
          </div>

          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              id="accordionButtonCollapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <strong><FormattedMessage id="FAQs5" defaultMessage="FAQ"/></strong>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
           <div class="accordion-body">
           <FormattedMessage id="FAQs5a" defaultMessage="Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body."/>
            </div>

          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              id="accordionButtonCollapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <strong><FormattedMessage id="FAQs6" defaultMessage="FAQ"/></strong>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <FormattedMessage id="FAQs6a" defaultMessage="Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body."/>
            </div>            

          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              id="accordionButtonCollapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              <strong><FormattedMessage id="FAQs7" defaultMessage="FAQ"/></strong>
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
           <div class="accordion-body">
           <FormattedMessage id="FAQs7a" defaultMessage="Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body."/>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
