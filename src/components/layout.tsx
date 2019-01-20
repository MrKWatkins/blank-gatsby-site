import * as React from "react";
import { Classes } from "@blueprintjs/core";
import Navigation from "./navigation";
import styles from "./layout.module.scss";

interface IProps
{
    children: any;
}

export default (props: IProps) =>
(
    <>
        <Navigation />
        <div className={`${styles.content} ${Classes.RUNNING_TEXT}`}>
            {props.children}
        </div>
    </>
);
