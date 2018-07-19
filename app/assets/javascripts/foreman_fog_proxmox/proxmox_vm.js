// Copyright 2018 Tristan Robert

// This file is part of ForemanFogProxmox.

// ForemanFogProxmox is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// ForemanFogProxmox is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with ForemanFogProxmox. If not, see <http://www.gnu.org/licenses/>.

$(document).on('ContentLoad', tfm.numFields.initAll);

function dropDown(id){
  var item = $(id);
  var hidden = item.css('display') == 'none';
  if (hidden) {
    item.show();
  } else {
    item.hide();
  }
}

function vmTypeSelected(item) {
  var selected = $(item).val();
  var server_form = $('#cdrom_image_form');

  switch (selected) {
    case 'qemu':
      initStorage();
      initOptions('iso');
      cdrom_image_form.hide();
      break;
    case 'lxc':
      initStorage();
      initOptions('iso');
      cdrom_image_form.hide();
      break;
    default:
      break;
  }
  return false;
}
