import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Box, Checkbox, Typography } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 350,
        },
    }),
);

const Line = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function DateAndTimePickers() {
    const classes = useStyles();

    return (
        <div>
            <Line style={{ marginBottom: 16 }}>
                <Typography style={{ fontWeight: 'bold', fontSize: 16, color: "#000000", paddingLeft: 12 }}>
                    Ngày sự kiện
                </Typography>
            </Line>
            <form noValidate style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex' }}>
                    <Line style={{ marginBottom: 48, marginTop: 24 }}>
                        <TextField
                            id="datetime-start"
                            label="Thời gian bắt đầu "
                            type="datetime-local"
                            defaultValue="2019-05-24T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Line>
                    <Line style={{ marginBottom: 48, marginTop: 24 }}>
                        <TextField
                            id="datetime-finish"
                            label="Thời gian kết thúc"
                            type="datetime-local"
                            defaultValue="2019-05-25T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Line>
                </div>

                <Line style={{ marginBottom: 16 }}>
                    <Typography style={{ fontWeight: 'bold', fontSize: 16, color: "#000000", paddingLeft: 12 }}>
                        Loại vé
                    </Typography>
                </Line>
                <Box>
                    <Line style={{ marginBottom: 16 }}>
                        <TextField required id="placeName" label="Tên vé" />
                    </Line>
                    <div style={{ display: 'flex' }}>
                        <Line style={{ marginBottom: 48, marginTop: 24 }}>
                            <TextField
                                id="datetime-start"
                                label="Thời gian bắt đầu bán "
                                type="datetime-local"
                                defaultValue="2019-05-24T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Line>
                        <Line style={{ marginBottom: 48, marginTop: 24 }}>
                            <TextField
                                id="datetime-finish"
                                label="Thời gian ngưng bán"
                                type="datetime-local"
                                defaultValue="2019-05-25T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Line>
                    </div>
                    <div style={{ display: "flex", flexDirection: 'column' }}>
                        <div style={{ display: "flex", alignItems: 'center' }}>
                            <Checkbox
                                value="checkedA"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                            />
                            <Typography style={{ fontWeight: 'bold', fontSize: 16, color: "#000000", paddingLeft: 12 }}>
                                Vé miễn phí
                        </Typography>
                        </div>
                        <div>
                            <TextField required id="placeName" label="Số tiền" />
                        </div>
                    </div>
                    <Line style={{ marginBottom: 48, marginTop: 32 }}>
                        <TextField required id="placeName" label="Tổng số lượng vé" />
                    </Line>
                    <Line style={{ marginBottom: 48, marginTop: 32 }}>
                        <TextField required id="placeName" label="Số vé tối thiểu trong một đơn hàng" />
                    </Line>
                    <Line style={{ marginBottom: 48, marginTop: 32, borderBottom: "1px solid '#000000'" }}>
                        <TextField required id="placeName" label="Số vé tối đa trong một đơn hàng" />
                    </Line>
                </Box>

                <Box>
                    <Line style={{ marginBottom: 16 }}>
                        <TextField required id="placeName" label="Tên vé" />
                    </Line>
                    <div style={{ display: 'flex' }}>
                        <Line style={{ marginBottom: 48, marginTop: 24 }}>
                            <TextField
                                id="datetime-start"
                                label="Thời gian bắt đầu bán "
                                type="datetime-local"
                                defaultValue="2019-05-24T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Line>
                        <Line style={{ marginBottom: 48, marginTop: 24 }}>
                            <TextField
                                id="datetime-finish"
                                label="Thời gian ngưng bán"
                                type="datetime-local"
                                defaultValue="2019-05-25T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Line>
                    </div>
                    <div style={{ display: "flex", flexDirection: 'column' }}>
                        <div style={{ display: "flex", alignItems: 'center' }}>
                            <Checkbox
                                value="checkedA"
                                inputProps={{ 'aria-label': 'Checkbox A' }}
                            />
                            <Typography style={{ fontWeight: 'bold', fontSize: 16, color: "#000000", paddingLeft: 12 }}>
                                Vé miễn phí
                        </Typography>
                        </div>
                        <div>
                            <TextField required id="placeName" label="Số tiền" />
                        </div>
                    </div>
                    <Line style={{ marginBottom: 48, marginTop: 32 }}>
                        <TextField required id="placeName" label="Tổng số lượng vé" />
                    </Line>
                    <Line style={{ marginBottom: 48, marginTop: 32 }}>
                        <TextField required id="placeName" label="Số vé tối thiểu trong một đơn hàng" />
                    </Line>
                    <Line style={{ marginBottom: 48, marginTop: 32 }}>
                        <TextField required id="placeName" label="Số vé tối đa trong một đơn hàng" />
                    </Line>
                </Box>


            </form>
        </div>

    );
}