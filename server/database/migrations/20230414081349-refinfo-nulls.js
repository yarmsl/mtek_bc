'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          'refinfo',
          'send_mail',
          {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '',
          },
          { transaction: t },
        ),
        queryInterface.changeColumn(
          'refinfo',
          'send_mail_password',
          {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '',
          },
          { transaction: t },
        ),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn(
        'refinfo',
        'send_mail',
        {
          type: Sequelize.STRING,
          defaultValue: null,
        },
        { transaction: t },
      ),
      queryInterface.changeColumn(
        'refinfo',
        'send_mail_password',
        {
          type: Sequelize.STRING,
          defaultValue: null,
        },
        { transaction: t },
      ),
    ]);
  },
};
