import React from "react";
import { mount } from "enzyme";
import templateFixture from "../fixtures/template";

import { Validation } from "../../pages/validation";

describe("Validation", () => {
  let props;

  beforeEach(() => {
    props = {
      reduxState: {
        template: templateFixture,
        researcher_name: "name",
        researcher_email: "email",
        researcher_phone: "phone"
      }
    };
  });

  it("renders", async () => {
    mount(<Validation {...props} />);
  });

  describe("missingTemplateVariables", () => {
    it("works if none missing", () => {
      const template = props.reduxState.template;
      const reduxState = props.reduxState;
      const instance = mount(<Validation {...props} />).instance();
      expect(instance.missingTemplateVariables(template, reduxState)).toEqual(
        []
      );
    });

    it("works if variable missing", () => {
      const template = props.reduxState.template;
      const reduxState = props.reduxState;
      delete reduxState.researcher_name;
      const instance = mount(<Validation {...props} />).instance();
      expect(instance.missingTemplateVariables(template, reduxState)).toEqual([
        {
          rowIndex: 1,
          variable: "researcher_name"
        }
      ]);
    });
  });
});
