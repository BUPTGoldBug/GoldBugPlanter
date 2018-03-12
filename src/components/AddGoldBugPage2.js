'use strict';

import React, { Component } from 'react';
import {
    Container,
    Header,
    CheckBox,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Card,
    Input,
    Item,
    List,
    Form,
    CardItem,
    ListItem,
    Thumbnail
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon1 from 'react-native-vector-icons/FontAwesome'
import { View } from 'react-native'
import * as constant from '../util/Constant'
import Modal from "react-native-modal";

export default class AddGoldBugPage2 extends Component {
    constructor(props, context) {
        console.log("AddGoldBugPage2 props");
        console.log(props);

        super(props, context);

        this.setQuestionEvent = this.setQuestionEvent.bind(this);
        this.setAns1Event = this.setAns1Event.bind(this);
        this.setAns2Event = this.setAns2Event.bind(this);
        this.setAns3Event = this.setAns3Event.bind(this);
        this.setAns4Event = this.setAns4Event.bind(this);
        this.setScoresEvent = this.setScoresEvent.bind(this);
        this.setKeyEvent = this.setKeyEvent.bind(this);
        this.commitGoldBug = this.commitGoldBug.bind(this);
        this.setAns1SelectEvent = this.setAns1SelectEvent.bind(this);
        this.setAns2SelectEvent = this.setAns2SelectEvent.bind(this);
        this.setAns3SelectEvent = this.setAns3SelectEvent.bind(this);
        this.setAns4SelectEvent = this.setAns4SelectEvent.bind(this);

        this.state = {
            description: "QA",
            question: "",
            scores: "",
            ans_1: "",
            ans_2: "",
            ans_3: "",
            ans_4: "",
            contentType: "0",
            birthTime: "",
            ans_1_selected: false,
            ans_2_selected: false,
            ans_3_selected: false,
            ans_4_selected: false,
        };
    }

    render() {
        const { isAddingGoldBug, isAddingGoldBugSucces, isPage2Visible, contentText } = this.props;
        const { bugBasic } = this.props.navigation.state.params;

        console.log("BUG BASIC PARAM IS >>>");
        console.log(this.props.navigation.state.params);
        console.log("ISADDGOLDBUGPAGE2 isVisible?");
        console.log(isPage2Visible);


        return (
            <View>
                <Modal isVisible={isPage2Visible} swipeDirection="right">
                    <View style={{ marginTop: 50, marginBottom: 100, marginLeft: 40, marginRight: 40, backgroundColor: "#D5EAE9", borderRadius: 5, flex: 1, paddingTop: 30, paddingLeft: 25, paddingRight: 25, paddingBottom: 15 }}>
                        <Form>
                            <Item rounded style={{ backgroundColor: "#D5EAE9", borderRadius: 14, borderColor: "#555555" }}>
                                <Input placeholder='Question' onChangeText={this.setQuestionEvent} />
                            </Item>

                            <Item rounded style={{ backgroundColor: "#D5EAE9", borderRadius: 14, borderColor: "#555555" }}>
                                <Input placeholder='Answer Candidate 1' onChangeText={this.setAns1Event} />
                                <CheckBox checked={this.state.ans_1_selected} onPress={() => { this.setAns1SelectEvent(); console.log("ANS_1_SELECTED IS "); console.log(this.state.ans_1_selected); }} style={{ marginRight: 20 }} />
                            </Item>

                            <Item rounded style={{ backgroundColor: "#D5EAE9", borderRadius: 14, borderColor: "#555555" }}>
                                <Input placeholder='Answer Candidate 2' onChangeText={this.setAns2Event} />
                                <CheckBox checked={this.state.ans_2_selected} onPress={() => { this.setAns2SelectEvent(); }} style={{ marginRight: 20 }} />
                            </Item>

                            <Item rounded style={{ backgroundColor: "#D5EAE9", borderRadius: 14, borderColor: "#555555" }}>
                                <Input placeholder='Answer Candidate 3' onChangeText={this.setAns3Event} />
                                <CheckBox checked={this.state.ans_3_selected} onPress={() => { this.setAns3SelectEvent(); }} style={{ marginRight: 20 }} />
                            </Item>

                            <Item rounded style={{ backgroundColor: "#D5EAE9", borderRadius: 14, borderColor: "#555555" }}>
                                <Input placeholder='Answer Candidate 4' onChangeText={this.setAns4Event} />
                                <CheckBox checked={this.state.ans_4_selected} onPress={() => { this.setAns4SelectEvent(); }} style={{ marginRight: 20 }} />
                            </Item>

                            <Item rounded style={{ backgroundColor: "#D5EAE9", borderRadius: 14, borderColor: "#555555" }}>
                                <Input placeholder='Scores' onChangeText={this.setScoresEvent} />
                            </Item>

                        </Form>
                        <Grid style={{ marginTop: 15 }}>
                            <Col style={{}}>
                                <Button block rounded style={{  backgroundColor: "#1CBBCF", height:60 }} onPress={() => {
                                    this.props.actions.switchToPage1();
                                }}>
                                    <Text >Previous</Text>
                                </Button>
                            </Col>
                            <Col style={{}}>
                                <Button block rounded style={{  backgroundColor: "#ff00c9", height:60 }} onPress={() => { this.commitGoldBug(bugBasic) }}>
                                    <Text >Plant</Text>
                                </Button>
                            </Col>
                        </Grid>
                    </View>
                </Modal>
            </View>
        );

    }

    setAns1SelectEvent() {
        if (this.state.ans_1_selected == true) {
            this.setState({ ans_1_selected: false });
        }
        else this.setState({ ans_1_selected: true });
    }
    setAns2SelectEvent() {
        if (this.state.ans_2_selected == true) {
            this.setState({ ans_2_selected: false });
        }
        else this.setState({ ans_2_selected: true });
    }
    setAns3SelectEvent() {
        if (this.state.ans_3_selected == true) {
            this.setState({ ans_3_selected: false });
        }
        else this.setState({ ans_3_selected: true });
    }
    setAns4SelectEvent() {
        if (this.state.ans_4_selected == true) {
            this.setState({ ans_4_selected: false });
        }
        else this.setState({ ans_4_selected: true });
    }

    setQuestionEvent(question) {
        this.setState({ question: question });
    }
    setAns1Event(ans_1) {
        this.setState({ ans_1: ans_1 });
    }
    setAns2Event(ans_2) {
        this.setState({ ans_2: ans_2 });
    }
    setAns3Event(ans_3) {
        this.setState({ ans_3: ans_3 });
    }
    setAns4Event(ans_4) {
        this.setState({ ans_4: ans_4 });
    }

    setScoresEvent(scores) {
        this.setState({ scores: scores });
    }
    setKeyEvent(key) {
        this.setState({ key: key });
    }

    commitGoldBug(bugBasic) {
        var myDate = new Date();
        var tmpTime = myDate.toLocaleTimeString();     //获取当前时间
        this.setState({ birthTime: tmpTime });

        var key = "";
        if (ans_1_selected == true) {
            key += "1";
        }
        else key += "0";
        if (ans_2_selected == true) {
            key += "1";
        }
        else key += "0";
        if (ans_3_selected == true) {
            key += "1";
        }
        else key += "0";
        if (ans_4_selected == true) {
            key += "1";
        }
        else key += "0";

        var bugInfo = {
            lon: bugBasic.lon,
            lat: bugBasic.lat,
            planter: bugBasic.planter,
            timeIndex: bugBasic.timeIndex,
            timeP_1: bugBasic.timeP_1,
            timeP_2: bugBasic.timeP_2,
            posIndex: bugBasic.posIndex,
            posP_1: bugBasic.posP_1,
            posP_2: bugBasic.posP_2,
            posP_3: bugBasic.posP_3
        };

        var content = {
            contentType: this.state.contentType,
            description: this.state.description,
            question: this.state.question,
            score: this.state.scores,
            ans_1: this.state.ans_1,
            ans_2: this.state.ans_2,
            ans_3: this.state.ans_3,
            ans_4: this.state.ans_4,
            key: key
        };

        var goldBugInfo = {
            bugInfo: bugInfo,
            content: content
        };

        console.log("GOLGBUG PARAMS AFTER ADDGOLDBUGPAGE2>>>>>>>");
        console.log(goldBugInfo);
        this.props.actions.addGoldBug(goldBugInfo);

    }

}