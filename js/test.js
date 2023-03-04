
  <div class="d-md-flex justify-content-between gap-2 mt-4">
      
      <div class="mx-2">
      <h3>Features</h3>
          <ul>
              <li>${tools.features[1] ? tools.features[1].feature_name : ""}</li>
              <li>${tools.features[2] ? tools.features[2].feature_name : ""}</li>
              <li>${tools.features[3] ? tools.features[3].feature_name : ""}</li>
              <li>${tools.features[4] ? tools.features[4].feature_name : ""}</li>
          </ul>
      </div>
        <div class="mx-2">
        <h3>Integrations</h3>
          <ul>
            <li>${tools.integrations[0] ? tools.integrations[0] : ""}</li>
            <li>${tools.integrations[1] ? tools.integrations[1] : ""}</li>
            <li>${tools.integrations[2] ? tools.integrations[2] : ""}</li>
            <li>${tools.integrations[3] ? tools.integrations[3] : ""}</li>
            <li>${tools.integrations[4] ? tools.integrations[4] : ""}</li>
          </ul>
        </div>
    </div>