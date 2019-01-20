import * as React from "react";
import { Classes, Navbar, NavbarGroup, NavbarHeading } from "@blueprintjs/core";

export default () =>
(
    <Navbar className={Classes.DARK} fixedToTop={true}>
        <NavbarGroup>
            <NavbarHeading>Blank Gatsby Site</NavbarHeading>
        </NavbarGroup>
    </Navbar>
);
