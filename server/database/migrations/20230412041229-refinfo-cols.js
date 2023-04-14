'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'refinfo',
          'send_mail',
          {
            type: Sequelize.STRING,
            defaultValue: null,
          },
          { transaction: t },
        ),
        queryInterface.addColumn(
          'refinfo',
          'send_mail_password',
          {
            type: Sequelize.STRING,
            defaultValue: null,
          },
          { transaction: t },
        ),
        queryInterface.addColumn(
          'refinfo',
          'get_mail',
          {
            type: Sequelize.STRING,
            defaultValue: '',
            allowNull: false,
          },
          { transaction: t },
        ),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('refinfo', 'send_mail'),
      queryInterface.removeColumn('refinfo', 'send_mail_password'),
      queryInterface.removeColumn('refinfo', 'get_mail'),
    ]);
  },
};
