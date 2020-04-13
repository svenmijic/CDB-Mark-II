import React, { useState, useEffect, Fragment } from "react";
import {
  Table,
  Icon,
  Button,
  Modal,
  Header,
  Segment,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import { IMedium } from "../../../app/models/medium";
import MediaForm from "../form/MediaForm";
import agent from "../../../app/api/agent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MediaDashboard = () => {
  const [media, setMedia] = useState<IMedium[]>([]);
  const [selectedMedium, setSelectedMedium] = useState<IMedium | undefined>(
    undefined
  );
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [update, setUpdate] = useState(false);

  const handleOpenForm = (id: string) => {
    setSelectedMedium(media.filter((m) => m.id === id)[0]);
    setShowEditModal(true);
  };

  const handleCloseForm = () => {
    setSelectedMedium(undefined);
    setShowEditModal(false);
  };

  const handleOpenDeleteModal = (id: string) => {
    setSelectedMedium(media.filter((m) => m.id === id)[0]);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedMedium(undefined);
    setShowDeleteModal(false);
  };

  const handleDeleteMedium = async () => {
    await agent.Media.delete(selectedMedium!.id);
    setSelectedMedium(undefined);
    setShowDeleteModal(false);
    setUpdate(true);
    toast.success("Medij izbrisan!");
  };

  useEffect(() => {
    agent.Media.list().then((media) => {
      setMedia(
        media.sort((a, b) =>
          a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()
            ? 1
            : b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase()
            ? -1
            : 0
        )
      );
    });
    setSelectedMedium(undefined);
    setUpdate(false);
    setShowEditModal(false);
  }, [update]);

  return (
    <Fragment>
      <Modal open={showEditModal} onClose={handleCloseForm}>
        <MediaForm selectedMedium={selectedMedium} setUpdate={setUpdate} />
      </Modal>
      <Button positive fluid onClick={() => setShowEditModal(true)}>
        <Icon name="plus" />
        Dodaj novi medij
      </Button>
      {media.length === 0 ? (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted size="big" />
          </Dimmer>
        </Segment>
      ) : (
        <Table celled selectable striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Ime medija</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">URL</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Mailovi</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Uredi/Izbriši
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {media.map((medium) => (
              <Table.Row key={medium.id}>
                <Table.Cell>{medium.name}</Table.Cell>
                <Table.Cell>
                  <a
                    href={medium.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {medium.url}
                  </a>
                </Table.Cell>
                <Table.Cell>{medium.emails}</Table.Cell>
                <Table.Cell collapsing textAlign="center">
                  <Button
                    circular
                    basic
                    color="yellow"
                    icon="edit"
                    onClick={() => handleOpenForm(medium.id)}
                  ></Button>
                  <Button
                    circular
                    basic
                    color="red"
                    icon="delete"
                    onClick={() => handleOpenDeleteModal(medium.id)}
                  ></Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}

      <Modal
        centered
        size="mini"
        open={showDeleteModal}
        onClose={handleCloseDeleteModal}
      >
        <Header
          size="medium"
          content="Jesi li siguran da želiš obrisati ovaj medij?"
        />
        <Modal.Actions>
          <Button positive fluid onClick={handleDeleteMedium}>
            Da
          </Button>
          <Button negative fluid onClick={handleCloseDeleteModal}>
            Ne
          </Button>
        </Modal.Actions>
      </Modal>
    </Fragment>
  );
};

export default MediaDashboard;
