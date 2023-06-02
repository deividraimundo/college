package com.example.app;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void buscarAlunoCodigoAPI(View view) {
        String url = "https://disease.sh/v3/covid-19/countries/br";

        StringRequest request = new StringRequest(Request.Method.GET, url, response -> {
                try {
                    JSONObject retornoAPI = new JSONObject(response);

                    String nome = retornoAPI.getString("country");

                    JSONObject countryInfo = retornoAPI.getJSONObject("countryInfo");
                    String texto = countryInfo.getString("iso3");
                    texto += " " + countryInfo.getString("lat");

                    Toast.makeText(this, nome+" "+texto, Toast.LENGTH_LONG).show();
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            },
            volleyError -> {
                Toast.makeText(this, volleyError.getMessage(), Toast.LENGTH_LONG).show();
            }
        );

        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(request);
    }
}