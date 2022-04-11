import React from 'react';
//import ReactDOM from 'react-dom';
import { Button, Intent, Classes } from "@blueprintjs/core";
import Dialog from '../Dialog';

export interface IState{
    open: boolean
    height: number
    heightInputs: number
    darkTheme: boolean
}

export default class MyDialog extends React.Component<any, IState> {
    constructor(props:any) {
        super(props)
        this.state = {
            open: false,
            height: 0,
            heightInputs: 0,
            darkTheme: false,
        }
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
        this.darkTheme = this.darkTheme.bind(this)
        this.textOnButton = this.textOnButton.bind(this)
    }
    private openDialog(height:number, heightInputs:number){
        this.setState({
            open: true,
            height,
            heightInputs,
        })
    }
    private closeDialog() {
        this.setState({
            open: false,
        })
    }
    private darkTheme() {
        if (!this.state.darkTheme) {
            this.setState({
                darkTheme: true
            })
        }
        if (this.state.darkTheme) {
            this.setState({
                darkTheme: false
            })
        }
    }
    private textOnButton() {
        if (this.state.darkTheme) {
            return <div>set light theme</div>
        }
        if (!this.state.darkTheme) {
            return <div>set dark theme</div>
        }
    }
    render() {
        const { open, darkTheme } = this.state
        return(
        <div>
            <Button text="open dialog" onClick={(a) => this.openDialog(500, 350)} intent={Intent.PRIMARY} />
                <Button text={this.textOnButton()} onClick={this.darkTheme}/>
            <Dialog className={darkTheme ? Classes.DARK : "light"} onClose={this.closeDialog} open={open} height={this.state.height} heightInputs={this.state.heightInputs}/>
        </div>
        )
    }
}