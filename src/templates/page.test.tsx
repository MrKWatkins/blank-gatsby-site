import * as React from "react";
import { mount } from "enzyme";
import Page from "./page";
import { H1 } from "@blueprintjs/core";

it("renders correctly", () =>
{
    const data: any =
    {
        markdownRemark:
        {
            fields:
            {
                title: "Test Page",
                path: "/test/page"
            },
            html: "<p>Some HTML!</p>"
        }
    };

    const page = mount(<Page data={data} />);

    const title = page.find(H1);
    expect(title.text()).toBe("Test Page");

    const div = page.find("div").filterWhere(d => d.props().dangerouslySetInnerHTML != null);

    expect(div.html()).toContain("<p>Some HTML!</p>");
});