import React from 'react';
import { Container, IconButton, Typography, Collapse } from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import { GREY_700, GREY_100, GREY_500, GREY_300 } from '../../../../configs/colors';

interface Props {}

export const ValueControl = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ValueBox = styled.div`
  width: 44px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: GREY_500,
      fontSize: 'inherit',
      marginRight: 4,
    },
  }),
);

export function validTotalTicket(total: number) {
  return total >= 1 && total >= 0 && total <= 10;
}
const ChooseTicketComponent: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [useBooking, setUseBooking] = React.useState(false);
  const [total, setTotal] = React.useState(0);
  return (
    <>
      <Container style={{ display: 'flex' }}>
        <div style={{ flex: 9 }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '4px',
              boxShadow:
                '0px 1px 3px rgba(0,0,0,0.2), 0px 2px 2px rgba(0,0,0,0.12), 0px 0px 2px rgba(0,0,0,0.14)',
              padding: '16px',
            }}
          >
            <Line style={{ paddingBottom: 8 }}>
              <div style={{ flex: 3 }}>
                <Typography variant="subtitle2">
                  <FormattedMessage id="ticket.type" />
                </Typography>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <Typography variant="subtitle2">
                  <FormattedMessage id="ticket.price" />
                </Typography>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <Typography variant="subtitle2">
                  <FormattedMessage id="ticket.total" />
                </Typography>
              </div>
            </Line>
            <Line style={{ paddingBottom: 4 }}>
              <div style={{ flex: 3 }}>Người lớn</div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                8000000 &nbsp;
                <FormattedMessage id="currency" />
              </div>

              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div>
                  <ValueControl>
                    <IconButton
                      size="small"
                      disabled={!validTotalTicket(total)}
                      onClick={() => {
                        if (total <= 1) {
                          setUseBooking(false);
                        }
                        setTotal(total - 1);
                      }}
                    >
                      <RemoveCircleOutline
                        style={{
                          fontSize: '32px',
                          color: !validTotalTicket(total) ? GREY_300 : undefined,
                        }}
                        color="secondary"
                      />
                    </IconButton>
                    <ValueBox>{total}</ValueBox>
                    <IconButton
                      size="small"
                      disabled={!validTotalTicket(total + 1)}
                      onClick={() => {
                        setUseBooking(true);
                        setTotal(total + 1);
                      }}
                    >
                      <AddCircle
                        style={{
                          fontSize: '32px',
                          color: !validTotalTicket(total + 1) ? GREY_300 : undefined,
                        }}
                        color="secondary"
                      />
                    </IconButton>
                  </ValueControl>
                </div>
              </div>
            </Line>
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 4 }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '4px',
              boxShadow:
                '0px 1px 3px rgba(0,0,0,0.2), 0px 2px 2px rgba(0,0,0,0.12), 0px 0px 2px rgba(0,0,0,0.14)',
              padding: '16px',
            }}
          >
            <Line style={{ paddingBottom: 8 }}>
              <Typography variant="subtitle1">THÔNG TIN NGƯỜI NHẬN VÉ</Typography>
            </Line>
            <div>
              <Line style={{ paddingBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PersonIcon className={classes.root} />
                  <Typography variant="subtitle2" style={{ color: GREY_500 }}>
                    Họ và tên
                  </Typography>
                </div>
                <div>
                  <Typography style={{ color: GREY_500 }} variant="body2">
                    Nguyễn Thế Anh
                  </Typography>
                </div>
              </Line>
              <Line style={{ paddingBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <MailOutlineOutlinedIcon className={classes.root} />
                  <Typography variant="subtitle2" style={{ color: GREY_500 }}>
                    Email
                  </Typography>
                </div>
                <div>
                  <Typography style={{ color: GREY_500 }} variant="body2">
                    Nguyentheanh17071998@gmail.com
                  </Typography>
                </div>
              </Line>
              <Line style={{ paddingBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon className={classes.root} />
                  <Typography variant="subtitle2" style={{ color: GREY_500 }}>
                    Điện thoại
                  </Typography>
                </div>
                <div>
                  <Typography style={{ color: GREY_500 }} variant="body2">
                    0387870022
                  </Typography>
                </div>
              </Line>
              <Line>
                <Typography variant="subtitle1">THÔNG TIN ĐẶT VÉ</Typography>
              </Line>
              <Collapse in={!useBooking}>
                <Typography variant="body2" style={{ color: GREY_500 }}>
                  <FormattedMessage id="ticket.pleaseChoose" />
                </Typography>
              </Collapse>
              <Collapse in={useBooking}>
                <Line style={{paddingTop: 8}}>
                  <div>
                    <Typography variant="subtitle2" style={{color: GREY_700}}>
                      <FormattedMessage id="ticket.type" />
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" style={{color: GREY_700}}>
                      <FormattedMessage id="ticket.total" />
                    </Typography>
                  </div>
                </Line> 
                <Line  style={{paddingTop: 8}}>
                  <div>
                    <Typography variant="body2" style={{ color: GREY_500 }}>
                      Vé người lớn
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body2" style={{ color: GREY_500 }}>
                      1000000 &nbsp;
                      <FormattedMessage id="currency" />
                    </Typography>
                  </div>
                </Line>
              </Collapse>
            </div>
          </div>
          <Line
            style={{
              backgroundColor: GREY_700,
              borderRadius: '4px',
              boxShadow:
                '0px 1px 3px rgba(0,0,0,0.2), 0px 2px 2px rgba(0,0,0,0.12), 0px 0px 2px rgba(0,0,0,0.14)',
              padding: '16px',
            }}
          >
            <div>
              <Typography variant="subtitle2" style={{ color: GREY_100 }}>
                Tổng số tiền
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle2" style={{ color: GREY_100 }}>
                1600000 &nbsp;
                <FormattedMessage id="currency" />
              </Typography>
            </div>
          </Line>
        </div>
      </Container>
    </>
  );
};

export default ChooseTicketComponent;
