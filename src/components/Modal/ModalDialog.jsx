import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReactRoundedImage from "react-rounded-image";
import avatar from "../../assets/avatar.png"

import { DefaultButton } from "../Button/Default/DefaultButton"
import { DefaultTextField } from "../TextField/TextField"
import { SkipLine } from "../../components/SkipLine/styles";
import { ProfileModalStyle, ModalDefaultStyle } from "./styles"
import { COLORS } from "../../config/defaultColors"

export function DefaultModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalDefaultStyle}>
          <div> {/* Header */}

          </div>
          <div className="modal-body">
            <div> {/* Content */}

            </div>
          </div>
          <div> {/* Footer */}
          
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export function ProfileModal(props) {

  const userInfo = JSON.parse(localStorage.getItem('accessUserInfo'));

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ProfileModalStyle}>
          <div> {/* Header */}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Profile
            </Typography>
          </div>
          <div className="modal-body">
            <div> {/* Content */}
              <Box marginLeft="30%">
                <SkipLine paddingTop="30" />
                <ReactRoundedImage image={avatar} roundedColor={COLORS.ThirdColor} imageWidth="130" imageHeight="130"/>
              </Box>
                <SkipLine paddingTop="20" />
              <Box textAlign="center">
                <DefaultTextField label="Name" width="300px" disabled="true" value={`${userInfo.firstName} ${userInfo.lastName}`} />
                  <Box marginBottom="10px" />
                <DefaultTextField label="Email" width="300px" disabled="true" value={userInfo.email ?? ''} />
                  <Box marginBottom="10px" />
                <DefaultTextField label="CpfCnpj" width="300px" disabled="true" value={userInfo.cpfCnpj ?? ''} />
                  <Box marginBottom="20px" />
              </Box>
            </div>
          </div>
          <div> {/* Footer */}
            <Box textAlign="center">
              <DefaultButton title="Close" backgroundColor={COLORS.PrimaryColor} onClick={props.onClose} width="100px" height="40px" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <DefaultButton title="Edit" backgroundColor={COLORS.PrimaryColor} href={props.href} width="100px" height="40px" />
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}