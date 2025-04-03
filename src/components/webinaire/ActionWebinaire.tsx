import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Icône "Voir"
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Icône "Contacter"

const options = [
  { label: 'Voir', icon: <VisibilityIcon fontSize="small" /> },
  { label: 'Contacter', icon: <ContactMailIcon fontSize="small" /> },
];

export default function ActionWebinaire() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action: string) => {
    handleClose();
    alert(`Action sélectionnée : ${action}`);
  };

  return (
    <div>
      {/* Bouton pour ouvrir le menu */}
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      {/* Menu avec les options */}
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => handleAction(option.label)}
          >
            {option.icon} {/* Icône */}
            <span className="ml-2">{option.label}</span> {/* Libellé */}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}