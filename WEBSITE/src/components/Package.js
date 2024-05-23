import React, { Component } from 'react'
import Footerdashbord from './smallcomp/smallcompindashbord/footerdashbord'
import Packages from './smallcomp/parts/system/packages'

export default class Price extends Component {
  render() {
    return (
      <div>
        <header class="flex items-center justify-between p-4" >
          <button class="text-gray-500 hover:text-gray-700" onClick={() => { window.location.href = './Dashbord' }}>
            <svg class="h-6 w-6 fill-current" viewBox="0 0 20 20">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"></path>
            </svg>
          </button>
        </header>
        <Packages />
        <Footerdashbord />
        <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
        </div>
      </div>
    )
  }
}